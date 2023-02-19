import { useEffect } from "react";
import BookTextComponent from "../components/BookPlayer/BookTextComponent";
import BookPlayerService from "../services/BookPlayerService";

const bookPlayerService = new BookPlayerService();

export default function Test() {
  useEffect(() => {
    bookPlayerService.calculatePages(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    );
  });
  return (
    <div className="h-screen bg-slate-500">
      <div className="h-80 w-80 mt-56 text-xl text-black">
        <BookTextComponent noLoad="true" />
      </div>
    </div>
  );
}
