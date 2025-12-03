interface ErrorScreenProps {
  error: string;
}

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0a0e1a]">
      <div className="text-center text-red-400">
        <p className="text-xl font-light">{error}</p>
      </div>
    </div>
  );
}

