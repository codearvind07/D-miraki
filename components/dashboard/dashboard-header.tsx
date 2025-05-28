interface DashboardHeaderProps {
  heading?: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2 mb-2">
      {(heading || text) && (
        <div className="grid gap-1">
          {heading && <h1 className="font-bold text-2xl">{heading}</h1>}
          {text && <p className="text-muted-foreground">{text}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
