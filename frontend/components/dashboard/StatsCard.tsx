import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
}

export default function StatsCard({
  title,
  value,
  description,
}: StatsCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-gray-400 text-sm">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-4xl font-bold text-red-500">
          {value}
        </p>

        <p className="mt-3 text-sm text-gray-500">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}