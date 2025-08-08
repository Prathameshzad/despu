import { teamData } from "data/util";


const Team = () => {
  return (
    <section className="py-10 px-4 bg-gray-100" id="team">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-left capitalize mb-10">
          International program committee

        </h1>

        {Object.entries(teamData).map(([role, members]) => (
          <div key={role} className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">{role}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  {/* <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  /> */}
                  <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
