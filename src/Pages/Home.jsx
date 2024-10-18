import React, { useReducer } from 'react';
import  '../Pages/Home.css'
import Header from '../Components/Header';

const employees = [{"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80},
    {"id":2,"first_name":"Jody","last_name":"Themann","email":"jthemann1@skyrock.com","gender":"Agender","age":29},
    {"id":3,"first_name":"Cece","last_name":"Carlet","email":"ccarlet2@jalbum.net","gender":"Male","age":69},
    {"id":4,"first_name":"Elton","last_name":"Allinson","email":"eallinson3@jugem.jp","gender":"Male","age":31},
    {"id":5,"first_name":"Garvy","last_name":"Shaddick","email":"gshaddick4@rediff.com","gender":"Male","age":32},
    {"id":6,"first_name":"Fin","last_name":"Realy","email":"frealy5@unc.edu","gender":"Male","age":26},
    {"id":7,"first_name":"Minnaminnie","last_name":"Fransseni","email":"mfransseni6@aboutads.info","gender":"Agender","age":52},
    {"id":8,"first_name":"Fernando","last_name":"Pagon","email":"fpagon7@blogs.com","gender":"Male","age":40},
    {"id":9,"first_name":"Tiphanie","last_name":"Fenny","email":"tfenny8@sakura.ne.jp","gender":"Female","age":52},
    {"id":10,"first_name":"Nerti","last_name":"Try","email":"ntry9@shareasale.com","gender":"Female","age":43},
    {"id":11,"first_name":"Abagael","last_name":"Beadell","email":"abeadella@unc.edu","gender":"Female","age":76},
    {"id":12,"first_name":"Morten","last_name":"McNamee","email":"mmcnameeb@sun.com","gender":"Male","age":38},
    {"id":13,"first_name":"Domenico","last_name":"Shearman","email":"dshearmanc@seesaa.net","gender":"Male","age":66},
    {"id":14,"first_name":"Rodolphe","last_name":"Bittlestone","email":"rbittlestoned@51.la","gender":"Male","age":33},
    {"id":15,"first_name":"Merv","last_name":"Watterson","email":"mwattersone@storify.com","gender":"Male","age":37},
    {"id":16,"first_name":"Betty","last_name":"Simm","email":"bsimmf@engadget.com","gender":"Female","age":26},
    {"id":17,"first_name":"Rafaellle","last_name":"Brighouse","email":"rbrighouseg@vinaora.com","gender":"Male","age":43},
    {"id":18,"first_name":"Sibby","last_name":"Meanwell","email":"smeanwellh@independent.co.uk","gender":"Female","age":66},
    {"id":19,"first_name":"Ricky","last_name":"Sissland","email":"rsisslandi@google.it","gender":"Male","age":76},
    {"id":20,"first_name":"Sauveur","last_name":"Hessenthaler","email":"shessenthalerj@ocn.ne.jp","gender":"Male","age":48},
    {"id":21,"first_name":"Carmela","last_name":"Bucksey","email":"cbuckseyk@acquirethisname.com","gender":"Female","age":22},
    {"id":22,"first_name":"Nydia","last_name":"Folke","email":"nfolkel@disqus.com","gender":"Female","age":68},
    {"id":23,"first_name":"Asia","last_name":"Boake","email":"aboakem@1und1.de","gender":"Female","age":39},
    {"id":24,"first_name":"Sterne","last_name":"Jacobowitz","email":"sjacobowitzn@cbc.ca","gender":"Male","age":47},
    {"id":25,"first_name":"Alwin","last_name":"Krolak","email":"akrolako@springer.com","gender":"Male","age":58},
    {"id":26,"first_name":"Linn","last_name":"Copeman","email":"lcopemanp@google.nl","gender":"Male","age":37},
    {"id":27,"first_name":"Britni","last_name":"Gumley","email":"bgumleyq@wordpress.org","gender":"Female","age":56},
    {"id":28,"first_name":"Trumann","last_name":"Di Carli","email":"tdicarlir@xinhuanet.com","gender":"Male","age":62},
    {"id":29,"first_name":"Deeanne","last_name":"Gun","email":"dguns@umich.edu","gender":"Female","age":64},
    {"id":30,"first_name":"Fielding","last_name":"Begin","email":"fbegint@jalbum.net","gender":"Male","age":77},
    {"id":31,"first_name":"Elga","last_name":"Ruegg","email":"erueggu@abc.net.au","gender":"Female","age":35},
    {"id":32,"first_name":"Cesaro","last_name":"Clerk","email":"cclerkv@cbslocal.com","gender":"Male","age":37},
    {"id":33,"first_name":"Harold","last_name":"Davioud","email":"hdavioudw@spiegel.de","gender":"Male","age":42},
    {"id":34,"first_name":"Adrianne","last_name":"Sprankling","email":"aspranklingx@sciencedaily.com","gender":"Female","age":58},
    {"id":35,"first_name":"Friedrick","last_name":"Stenners","email":"fstennersy@irs.gov","gender":"Male","age":41},
    {"id":36,"first_name":"Nan","last_name":"Volette","email":"nvolettez@fc2.com","gender":"Female","age":27},
    {"id":37,"first_name":"Darci","last_name":"Keuneke","email":"dkeuneke10@xrea.com","gender":"Female","age":80},
    {"id":38,"first_name":"Doug","last_name":"Motton","email":"dmotton11@nationalgeographic.com","gender":"Male","age":66},
    {"id":39,"first_name":"Cherin","last_name":"Walkley","email":"cwalkley12@craigslist.org","gender":"Female","age":20},
    {"id":40,"first_name":"Efren","last_name":"Panter","email":"epanter13@google.de","gender":"Male","age":45},
    {"id":41,"first_name":"Dorine","last_name":"Elcoate","email":"delcoate14@mit.edu","gender":"Female","age":61},
    {"id":42,"first_name":"Liuka","last_name":"Lewis","email":"llewis15@bluehost.com","gender":"Female","age":43},
    {"id":43,"first_name":"Gayla","last_name":"Inder","email":"ginder16@mediafire.com","gender":"Female","age":46},
    {"id":44,"first_name":"Garrard","last_name":"Maxwaile","email":"gmaxwaile17@blinklist.com","gender":"Male","age":51},
    {"id":45,"first_name":"Patric","last_name":"Woodburne","email":"pwoodburne18@java.com","gender":"Male","age":35},
    {"id":46,"first_name":"Merrill","last_name":"Kemmis","email":"mkemmis19@ihg.com","gender":"Female","age":73},
    {"id":47,"first_name":"Astrid","last_name":"Dorman","email":"adorman1a@trellian.com","gender":"Female","age":31},
    {"id":48,"first_name":"Kippar","last_name":"Bastard","email":"kbastard1b@bbb.org","gender":"Male","age":31},
    {"id":49,"first_name":"Allan","last_name":"Gibbins","email":"agibbins1c@ezinearticles.com","gender":"Genderfluid","age":44},
    {"id":50,"first_name":"Melisenda","last_name":"Queree","email":"mqueree1d@intel.com","gender":"Female","age":52}]
    ;

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        team: [...state.team, action.payload],
        disabledEmployees: [...state.disabledEmployees, action.payload.id],
      };
    case 'REMOVE_EMPLOYEE':
      return {
        ...state,
        team: state.team.filter((employee) => employee.id !== action.payload.id),
        disabledEmployees: state.disabledEmployees.filter(
          (id) => id !== action.payload.id
        ),
      };
    case 'SORT_TEAM':
      return {
        ...state,
        team: [...state.team].sort((a, b) => a.age - b.age),
      };
    default:
      return state;
  }
};

// Define the initial state
const initialState = {
  team: [],
  disabledEmployees: [],
};

const EmployeesComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addEmployee = (employee) => {
    dispatch({ type: 'ADD_EMPLOYEE', payload: employee });
  };

  const removeEmployee = (employee) => {
    dispatch({ type: 'REMOVE_EMPLOYEE', payload: employee });
  };

  const sortTeamByAge = () => {
    dispatch({ type: 'SORT_TEAM' });
  };

  const calculateAverageAge = () => {
    if (state.team.length === 0) return 0;
    const totalAge = state.team.reduce((total, employee) => total + employee.age, 0);
    return (totalAge / state.team.length).toFixed(2);
  };

  return (
    <>
        <Header />
        <div className="container">
        <div className="box">
            <h2>Employee List</h2>
            <ul>
            {employees.map((employee) => (
                <li
                key={employee.id}
                className={`employee-item ${state.disabledEmployees.includes(employee.id) ? 'disabled' : ''}`}
                >
                <div className="employee-info">
                    {employee.first_name} {employee.last_name}, Age: {employee.age}
                </div>
                {!state.disabledEmployees.includes(employee.id) && (
                    <button onClick={() => addEmployee(employee)} className="add-btn">ADD</button>
                )}
                </li>
            ))}
            </ul>
        </div>
        <div className="box">
            <h2>Team Members</h2>
            <button className="sort-btn" onClick={sortTeamByAge}>SORT BY AGE</button>
            <ul>
            {state.team.map((employee) => (
                <li key={employee.id} className="team-member-item">
                <div className="employee-info">
                    {employee.first_name} {employee.last_name}, Age: {employee.age}
                </div>
                <button onClick={() => removeEmployee(employee)} className="remove-btn">REMOVE</button>
                </li>
            ))}
            </ul>
            <p>Average Age: {calculateAverageAge()}</p>
        </div>
        </div>
    </>
  );
};

export default EmployeesComponent;