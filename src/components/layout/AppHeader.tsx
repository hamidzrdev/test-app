export default function AppHeader() {
return (
<header className="w-full shadow-sm border-b border-white/30 sticky top-0 z-50 bg-black/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"><h1 className="text-2xl font-grifter cursor-pointer">SMART</h1><div className="hidden md:flex items-center gap-2 text-md font-aeonik"><span>Are you a merchant?</span><button className="text-cyan-300 hover:underline">Login here</button></div><button className="md:hidden text-white/70" aria-label="Toggle Menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg></button></div>
</header>)

}