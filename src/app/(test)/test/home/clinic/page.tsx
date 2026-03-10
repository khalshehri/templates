"use client";
import Link from "next/link";

const templates = [
  { id: "clinic-pulse", name: "Clinic Pulse", description: "Heartbeat/ECG monitor line animation across the screen" },
  { id: "clinic-dna", name: "Clinic DNA", description: "DNA double helix rotating with glowing nodes" },
  { id: "clinic-shield", name: "Clinic Shield", description: "Health protection shield with plus sign, pulsing aura" },
  { id: "clinic-molecule", name: "Clinic Molecule", description: "Floating molecular structure with connected atoms" },
  { id: "clinic-cross", name: "Clinic Cross", description: "Large glowing medical cross symbol with radial light" },
  { id: "clinic-wave", name: "Clinic Wave", description: "Calm healing waves (sine curves) in soothing blues/teals" },
  { id: "clinic-stethoscope", name: "Clinic Stethoscope", description: "Large stethoscope illustration with sound waves from earpiece" },
  { id: "clinic-cells", name: "Clinic Cells", description: "Microscopic cells and platelets floating with scientific feel" },
  { id: "clinic-clean", name: "Clinic Clean", description: "Ultra-clean white space with sterile minimalist dot grid" },
  { id: "clinic-care", name: "Clinic Care", description: "Gentle hands cradling heart shape, warmth and care theme" },
];

export default function ClinicCategory() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back to Home Experiments</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Medical Clinic</h1>
        <div className="grid gap-3">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/clinic/${t.id}`} className="bg-gray-900 border border-teal-500/30 hover:border-teal-500/50 rounded-xl p-4 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
