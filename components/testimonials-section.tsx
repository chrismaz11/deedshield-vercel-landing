const integrations = [
  { name: "Simplifile", type: "Integration" },
  { name: "CSC", type: "Integration" },
  { name: "ePN", type: "Integration" },
  { name: "PRIA", type: "Standard" },
  { name: "MISMO", type: "Standard" },
  { name: "ALTA", type: "Standard" },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted Standards & Partners
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-y border-border py-8">
          {integrations.map((item) => (
            <div key={item.name} className="text-center">
              <span className="text-sm font-medium text-foreground">
                {item.name}
              </span>
              <span className="ml-2 text-xs text-muted-foreground">
                ({item.type})
              </span>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
