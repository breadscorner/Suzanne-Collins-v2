import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-5 lg:py-10 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
          <h4 className="text-base lg:text-lg font-bold mb-3 lg:mb-0">
            Website Created By Brett Gill
          </h4>
          <p className="text-xs lg:text-sm text-gray-500 uppercase mt-3 lg:mt-0 lg:ml-4">
            This website was redesigned. <br></br>
            <a
              href="https://www.suzannecollinsbooks.com/"
              className="flex underline justify-center"
              target="_blank"
            >
              Compare to the original
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
