type logoProps = {
  logoTitle: string;
};
export default function Logo({ logoTitle }: logoProps) {
  return (
    <>
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-bold leading-tight whitespace-nowrap dark:text-white">
        {logoTitle}
      </span>
    </>
  );
}
