import DashboardLayout from "@/src/components/layout/DashboardLayout";
import Card from "@/src/components/ui/Card";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card title="Revenue">
          <p>$12,000</p>
        </Card>

        <Card title="Users">
          <p>1,240</p>
        </Card>

        <Card title="Sales">
          <p>320</p>
        </Card>
      </div>
    </DashboardLayout>
  );
}
