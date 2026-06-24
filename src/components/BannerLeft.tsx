import type { ReactNode} from "react";

type Props = {
  children: ReactNode;
};

export default function LeftBanner({ children }: Props) {
  return (
    <div className="left-banner">
      {children}
    </div>
  );
}