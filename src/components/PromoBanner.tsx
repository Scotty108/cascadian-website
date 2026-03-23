export default function PromoBanner() {
  return (
    <div className="bg-cascade-950 text-white py-2.5 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cascade-950 via-cascade-900 to-cascade-950 animate-pulse opacity-30" />
      <p className="relative z-10 text-sm md:text-base font-medium tracking-wide">
        <span className="inline-block animate-bounce mr-2 text-forest-400">&#9733;</span>
        <span className="font-bold text-forest-400">SAVE UP TO 40%</span>
        {" "}on our Complete Home System Package &mdash;{" "}
        <a
          href="#best-seller"
          className="underline underline-offset-2 hover:text-forest-300 transition-colors duration-200"
        >
          Shop Now
        </a>
        <span className="inline-block animate-bounce ml-2 text-forest-400">&#9733;</span>
      </p>
    </div>
  );
}
