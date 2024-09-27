import MemberContent from "../components/member/MemberContent";

export default function MembersPage() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-purple-200 to-purple-400">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-6">
        勇者たちのクイズを
        <br className="block md:hidden" />
        選んでください
      </h1>
      <MemberContent />
    </div>
  );
}
