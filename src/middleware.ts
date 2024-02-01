export {default} from "next-auth/middleware";

export const config = { matcher: ["/users:path*", "/admins:path*", "/superAdmins:path*"] }


