import React from "react";

const DashboardCompo = React.lazy(() => import("Dashboard/Dashboard"));
const LoginCompo = React.lazy(() => import("Login/Login"));
const ForgotPasswordCompo = React.lazy(() => import("ForgotPassword/ForgotPassword"));
const TenantCompo = React.lazy(() => import("Tenant/Tenant"));
const EditionCompo = React.lazy(() => import("Edition/Edition"));
const SettingsCompo = React.lazy(() => import("Settings/Settings"));
const UsersCompo = React.lazy(() => import("Users/Users"));

const AuditlogsCompo = React.lazy(() => import("AuditLogs/AuditLogs"));
const RolesCompo = React.lazy(() => import("Roles/Roles"));
const OrganizationUnitsCompo = React.lazy(
  () => import("OrganizationUnits/OrganizationUnits")
);
const LanguageCompo = React.lazy(() => import("Language/Language"));
const LanguageTextCompo = React.lazy(() => import("LanguageText/LanguageText"));
const DynamicPropertyCompo = React.lazy(
  () => import("DynamicProperties/DynamicProperties")
);
const IconListCompo = React.lazy(() => import("IconList/IconList"));
const ClaimTypesCompo = React.lazy(() => import("ClaimTypes/ClaimTypes"));
const ApplicationsCompo = React.lazy(() => import("Applications/Applications"));
const TextTemplateCompo = React.lazy(() => import("TextTemplate/TextTemplate"));
const ApiScopeCompo = React.lazy(() => import("ApiScope/ApiScope"));
const ScopeCompo = React.lazy(() => import("Scope/Scope"));
const IdentityResourcesCompo = React.lazy(
  () => import("IdentityResources/IdentityResources")
);
const SecurityLogsCompo = React.lazy(() => import("SecurityLogs/SecurityLogs"));
const ChatsCompo = React.lazy(() => import("Chats/Chats"));
const FileManagementCompo = React.lazy(
  () => import("FileManagement/FileManagement")
);
const FormsCompo = React.lazy(() => import("Forms/Forms"));
const BloggerCompo = React.lazy(() => import("Blogger/Blogger"));
const ClientCompo = React.lazy(() => import("Client/Client"));
const PollsCompo = React.lazy(()=> import("Polls/Polls"));
const UrlForwardingCompo = React.lazy(() => import("UrlForwarding/UrlForwarding"));
const PaymentPlansCompo = React.lazy(() => import("PaymentPlans/PaymentPlans"));
const BlogsCompo = React.lazy(() => import("Blogs/Blogs"));
const ApiResourcesCompo = React.lazy(() => import("ApiResources/ApiResources"));

export {
  DashboardCompo,
  LoginCompo,
  ForgotPasswordCompo,
  TenantCompo,
  EditionCompo,
  SettingsCompo,
  UsersCompo,
  AuditlogsCompo,
  RolesCompo,
  OrganizationUnitsCompo,
  LanguageCompo,
  LanguageTextCompo,
  DynamicPropertyCompo,
  IconListCompo,
  ClaimTypesCompo,
  ApplicationsCompo,
  TextTemplateCompo,
  ApiScopeCompo,
  ScopeCompo,
  IdentityResourcesCompo,
  SecurityLogsCompo,
  ChatsCompo,
  FileManagementCompo,
  FormsCompo,
  BloggerCompo,
  ClientCompo,
  PollsCompo,
  UrlForwardingCompo,
  PaymentPlansCompo,
  BlogsCompo,
  ApiResourcesCompo,
};