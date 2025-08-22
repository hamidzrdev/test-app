export default function LoginContainer({children,className}: {children: React.ReactNode,className?: string})
{
    return (<div className={`flex items-center justify-center ${className}`}><div className="w-full  max-w-3xl h-full flex items-center justify-center overflow-hidden"><div className="w-full  rounded-lg shadow-2xl bg-white/10 backdrop-blur-lg p-4">{children}</div></div></div>)
}