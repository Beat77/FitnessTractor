import { useAuth } from "../auth/AuthContext";
export default function ActivityItem ({activity}) {
const { token } = useAuth();

return <li>{activity.name}{
    token?<button>Delete</button>:null
}
</li>

}

