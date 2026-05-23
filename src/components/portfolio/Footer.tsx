export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:px-12">
        <div>
          Chetan Jagtap<span className="text-[var(--ember)]">.</span> Motion & Video
        </div>
        <div>© {new Date().getFullYear()} — All rights reserved</div>
      </div>
    </footer>
  );
}
