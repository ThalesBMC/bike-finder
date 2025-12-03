interface ActivityGraphProps {
  activityHistory: number[];
}

export function ActivityGraph({ activityHistory }: ActivityGraphProps) {
  return (
    <div className="px-6 pb-5">
      <div className="bg-[#0a0e1a] rounded-lg p-4">
        <p className="text-[10px] text-[#9ca3af] uppercase tracking-wider mb-3 font-medium">
          Activity
        </p>
        <div className="h-12 flex items-end gap-[3px]">
          {activityHistory.map((value, idx) => (
            <div
              key={idx}
              className="flex-1 bg-gradient-to-t from-[#2d4d8c] via-[#4a9eff] to-[#6bb3ff] rounded-sm transition-all duration-500"
              style={{
                height: `${Math.max(value, 5)}%`,
                opacity: 0.4 + (idx / activityHistory.length) * 0.6,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

