export function MonitoringSystemsOnePage() {
  return (
    <div className="w-full flex flex-col h-full  p-16">
      <iframe
        width="100%"
        height="100%"
        src={import.meta.env.VITE_SYSTEM_ANALYSER_ONE}
        title="Analyze panel"
      />
    </div>
  );
}
