export function MonitoringSystemsTowPage() {
  return (
    <div className="w-full flex flex-col h-full">
      <iframe
        width="100%"
        height="100%"
        src={import.meta.env.VITE_SYSTEM_ANALYSER_TOW}
        title="Analyze panel"
      />
    </div>
  );
}
