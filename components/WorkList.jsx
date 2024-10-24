import "@styles/WorkList.scss";
import WorkCard from "./WorkCard";

const WorkList = ({ data = [] }) => { // Default data to an empty array
  return (
    <div className="work-list">
      {Array.isArray(data) && data.length > 0 ? ( // Check if data is an array and has elements
        data.map((work) => (
          <WorkCard
            key={work._id} // Ensure _id is a unique identifier for each work
            work={work}
          />
        ))
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>No works available !!!</p> // Fallback message when data is empty
      )}
    </div>
  );
};

export default WorkList;
