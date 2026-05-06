export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900">
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