import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function NewProjectPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Create Project"
        right={
          <Button asChild variant="outline">
            <Link href="/projects">Back</Link>
          </Button>
        }
      />

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">New Project</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Project Name</Label>
            <Input placeholder="Project name..." />
          </div>

          <div className="space-y-2">
            <Label>Due Date</Label>
            <Input type="date" />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Project description..." />
          </div>

          <div className="md:col-span-2 flex gap-2">
            <Button disabled>Create</Button>
            <Button variant="secondary" asChild>
              <Link href="/projects">Cancel</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
