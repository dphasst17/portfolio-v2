import { useEffect } from "react"
import Header from "./header"
const Layout = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const starsWrapper = document.querySelector(".bg-overlay-animate");
        const stars = new Array(100).fill(0).map(() => {
            const star = document.createElement("div");
            star.id = 'star-animate'
            starsWrapper?.append(star);
            star.style.animationDelay = `${Math.random()}s`;
            return {
                star,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                r: Math.random() * 2
            };
        });

        function update() {
            stars.forEach((star) => {
                star.star.style.transform = `translate(${star.x}px, ${star.y}px) scale(${star.r})`;
                star.star.style.opacity = `${star.r / 2}`;
            });
            requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }, [])
    return <>
        <section className="w-full h-auto min-h-[95vh] flex flex-col items-center justify-start">
            <Header />
            <main className="w-full bg-transparent">
                <div className="hidden md:block bg-overlay-animate -z-10"></div>
                {children}
            </main>
        </section>
    </>
}
export default Layout