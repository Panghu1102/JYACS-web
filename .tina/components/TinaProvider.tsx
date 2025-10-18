import { TinaEditProvider } from "tinacms/dist/edit-state";

export default function TinaProvider({ children }) {
  return <TinaEditProvider>{children}</TinaEditProvider>;
}
