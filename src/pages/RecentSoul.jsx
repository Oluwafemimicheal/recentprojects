import Table from "../components/Table";
const RecentSoul = () => {
  return (
    <div className="w-10/12 p-5 bg-gray-100">
      <div className="pt-4 m-auto">
        <Table isAll={true}  backToTop={false} />
      </div>
    </div>
  );
};

export default RecentSoul;
