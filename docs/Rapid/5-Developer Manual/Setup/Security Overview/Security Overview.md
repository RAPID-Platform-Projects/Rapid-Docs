# Rapid Security Overview

At Rapid we are committed to securing your data from External Agents, Internal Staff and even us. We have designed the platform to empower our clients to control and manage access to your data and files.

## Provisioning and Files

During provisioning Rapid requires an administrator to create the site. A new Microsoft Team and SharePoint site will be created using this account to house all files for the system. This provides a easy way to manage which users within your tennancy have access to information.

## User Access

Within your tenant there are Principals that describe different Users. Within your Rapid site we also have a set of Principals to control access to both the site itself as well as item level permissions. Rapid Principals must have a corresponding Microsoft Principal to authenticate to the site. Any Microsoft Principal that is disabled will consequently be blocked from accessing your Rapid site.

This allows administrators to manage Users from one location, within their normal Microsoft admin portals.

Principals within Rapid are then able to sync item level permissions onto files, ensuring that even if a User directly navigates to the files via SharePoint they'll still be secured correctly.

## Rapid Access

Rapid Platform has no backdoor access to sites and their records through the software. Sites hosted on Rapid Platform servers will grant Rapid staff direct access to the database. Self-hosted deployments are fully owned and managed by you. We typically ask for read-only access when engaging in reporting activities, but the security policy on self-hosted deployments remain at your discretion.

Rapid may request guest user access for staff when engaging in consulting activities. These Microsoft Principals remain under your control and access can be reduced or revoked by you at any time.

