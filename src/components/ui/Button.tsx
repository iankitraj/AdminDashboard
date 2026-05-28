import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-4 py-2 font-medium transition-all duration-200",
        {
          "bg-black text-white hover:bg-gray-800": variant === "primary",

          "bg-gray-200 text-black hover:bg-gray-300": variant === "secondary",
        },
      )}
    >
      {children}
    </button>
  );
}
