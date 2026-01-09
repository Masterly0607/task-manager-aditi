import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Comment } from "@/features/tasks/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CommentsCard({ comments }: { comments: Comment[] }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">
          Comments ({comments.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="rounded-xl border bg-muted/20 p-3">
              <div className="text-sm font-medium">{c.author}</div>
              <div className="text-sm text-muted-foreground">{c.content}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Input placeholder="Write a comment..." />
          <Button size="sm">Post Comment</Button>
          <div className="text-xs text-muted-foreground">UI only (no POST)</div>
        </div>
      </CardContent>
    </Card>
  );
}
