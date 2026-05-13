export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-900 py-8">
      <h1
        className="text-center text-5xl font-extrabold tracking-widest uppercase"
        style={{
          color: '#FFD700',
          textShadow:
            '0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 40px #FF6400, 3px 3px 0px #8B4500',
          fontFamily: '"Courier New", Courier, monospace',
          letterSpacing: '0.2em',
        }}
      >
        HOLA CHICOS
      </h1>
      <iframe
        src="/mario.html"
        width={820}
        height={560}
        style={{
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 0 40px rgba(255, 100, 0, 0.4)',
          background: '#000',
        }}
        title="Mario Bros Game"
      />
    </main>
  );
}
