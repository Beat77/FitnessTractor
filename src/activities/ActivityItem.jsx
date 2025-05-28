import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
export default function ActivityItem ({activity}) {
const { token } = useAuth();

 const {
    mutate: deletedActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE","/activities/"+activity.id,["activities"])


return <li>{activity.name, activity.description}{
    token?<button onClick={()=>deletedActivity()}>Delete</button>:null
}
</li>

}

