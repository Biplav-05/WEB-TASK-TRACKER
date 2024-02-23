type logoProps = {
  logoTitle: string;
  className?: string;
};
export default function Logo({ logoTitle, className }: logoProps) {
  return (
    <>
      <img
        src="task_tracker_logo.jpg"
        className="h-8 me-2"
        alt="Flowbite Logo"
      />
      <span
        className={`${className} self-center text-2xl font-bold leading-tight whitespace-nowrap dark:text-white`}
      >
        {logoTitle}
      </span>
    </>
  );
}
