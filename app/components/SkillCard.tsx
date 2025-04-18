interface SkillCardProps {
    title: string;
    skills: string;
    color?: string;
  }
  
  export default function SkillCard({ title, skills, color = "blue" }: SkillCardProps) {
    const colorClasses = {
      blue: "border-t-4 border-blue-500",
      purple: "border-t-4 border-purple-500",
      green: "border-t-4 border-green-500",
      orange: "border-t-4 border-orange-500",
      red: "border-t-4 border-red-500",
    };
  
    return (
      <div className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow ${colorClasses[color as keyof typeof colorClasses]}`}>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{skills}</p>
      </div>
    );
  }