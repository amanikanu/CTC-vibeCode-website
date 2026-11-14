import ProjectCard from "@/components/project-card";
import { getProjects } from "@/lib/data";

export default function ProjectsPage() {
    const projects = getProjects();

    return <h1 className="text-center mt-20">Coming Soon</h1>

    // return (
    //     <div className="bg-background">
    //         <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] py-12 md:py-20 lg:py-24">
    //             <div className="flex flex-col items-center text-center mb-12 md:mb-16">
    //                 <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
    //                     Community Projects
    //                 </h1>
    //                 <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
    //                     Discover the innovative solutions being built by members of the Calabar Tech Community.
    //                 </p>
    //             </div>
    //             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    //                 {projects.map((project) => (
    //                     <ProjectCard key={project.id} project={project} />
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );
}
