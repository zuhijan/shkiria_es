import Image from "next/image";

type ProjectCardProps = {
  title: string;
  year: number[];
  description: string;
  img: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, year, description, img}) => {
  return (
    <div className="flex flex-row cursor-pointer p-2 hover:shadow-lg rounded-lg">
      <div className="flex flex-col pr-4">
        <div className="w-full flex justify-between items-baseline">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {title}
                  </span>
          <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {year.join(' - ')}
                  </span>
        </div>
        <p className="prose prose-neutral dark:prose-invert pt-3">
          {description}
        </p>
      </div>
      <Image
        alt={title}
        src={img}
        width={100}
        height={50}
        priority
        className="rounded-lg object-cover w-auto h-auto border-2 dark:border-neutral-500"
      />
    </div>

  )
}
