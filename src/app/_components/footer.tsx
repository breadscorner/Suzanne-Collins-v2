import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10 flex items-center justify-center lg:justify-between">
          <h4 className="text-lg font-bold">Website Created By Brett Gill</h4>
          <p className="text-sm text-gray-500">This website was redesigned. <a href="https://www.suzannecollinsbooks.com/" className="underline" target="_blank">Compare to the original</a>.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
