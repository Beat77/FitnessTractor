import ActivityItem from "./ActivityItem";

import useQuery from "../api/useQuery";
export default function ActivitiesPage() {
   const {data: activities, loading, error} = useQuery("/activities");
console.log (activities);  
   if(loading||!activities) {
    return <p>"loading"</p>

   }
   return (
    <>
      <h1>Activities</h1>
      {
        activities.map((activity)=>{
          return(<ActivityItem key={activity.id}
          activity={activity}/>)
        }) 
      }
    </>
  );
}
