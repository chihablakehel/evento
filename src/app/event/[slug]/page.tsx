import H1 from "@/components/h1";
import { getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative flex justify-center items-center overflow-hidden py-14 md:py-20">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          className="object-cover blur-3xl z-0"
          priority
        />
        <div className="z-1 flex flex-col md:flex-row gap-6 lg:gap-16 relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col ">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>

            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize bg-blur border-white/10 border-2 rounded-md mt-5 md:mt-auto w-[95vw] sm:w-full py-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section title="About this event" paragragh={event.description} />
        <Section title="Location" paragragh={event.location} />
      </div>
    </main>
  );
}

type SectionProps = {
  title: string;
  paragragh: string;
};

function Section({ title, paragragh }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl mb-8">{title}</h2>
      <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
        {paragragh}
      </p>
    </section>
  );
}
