import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/services/users.service";
import { formatDate } from "@/utilities";

export default function Settings() {
  const { loading, error, data } = useQuery(GET_PROFILE);
  const profile = data?.profile;

  return (
    <div className="overflow-y-auto">
      <div className="space-y-12">
        <h1 className="text-3xl text-neutral-1">Profile</h1>
        <ul className="text-neutral-1 space-y-3">
          <li className="space-y-1">
            <span className="text-sm text-neutral-2 block">Name</span>
            {loading ? (
              <span className="block w-64 h-6 rounded bg-neutral-3 animate-pulse"></span>
            ) : (
              <p className="text-lg">{profile?.fullName}</p>
            )}
          </li>
          <li className="space-y-1">
            <span className="text-sm text-neutral-2 block">Email</span>
            {loading ? (
              <span className="block w-32 h-6 rounded bg-neutral-3 animate-pulse"></span>
            ) : (
              <p>{profile?.email}</p>
            )}
          </li>
          <li className="space-y-1">
            <span className="text-sm text-neutral-2 block">Type</span>
            {loading ? (
              <span className="block w-32 h-8 rounded bg-neutral-3 animate-pulse"></span>
            ) : (
              <span className="inline-flex px-4 py-1 rounded bg-neutral-1/10 text-neutral-1">
                {profile?.type}
              </span>
            )}
          </li>
          <li className="space-y-1">
            <span className="text-sm text-neutral-2 block">Created at</span>
            {loading ? (
              <span className="block w-24 h-6 rounded bg-neutral-3 animate-pulse"></span>
            ) : (
              <p>{formatDate(profile?.createdAt)}</p>
            )}
          </li>
          <li className="space-y-1">
            <span className="text-sm text-neutral-2 block">Updated at</span>
            {loading ? (
              <span className="block w-24 h-6 rounded bg-neutral-3 animate-pulse"></span>
            ) : (
              <p>{formatDate(profile?.updatedAt)}</p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
