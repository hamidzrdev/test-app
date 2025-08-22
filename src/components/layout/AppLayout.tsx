export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        overflow-hidden w-full
        relative
        min-h-screen
        bg-[#0b1020]
        [background-repeat:no-repeat]
        [background-image:radial-gradient(600px_600px_at_100%_0%,rgba(59,130,246,0.35)_0%,rgba(59,130,246,0)_60%),radial-gradient(600px_600px_at_0%_100%,rgba(236,72,153,0.35)_0%,rgba(236,72,153,0)_60%)]
      "
    >
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-24 -right-24 -z-0"
      >
        <defs>
          <radialGradient id="circleGradient" cx="5%" cy="10%" r="20%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.01" />
            <stop offset="5%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>

          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.1"
              strokeOpacity="0.2"
            />
          </pattern>
        </defs>
        <circle cx="200" cy="200" r="200" fill="url(#circleGradient)" />
        <circle cx="200" cy="200" r="200" fill="url(#grid)" />
      </svg>
      <main className="relative z-10 p-10 ">{children}</main>
    </div>
  );
}
