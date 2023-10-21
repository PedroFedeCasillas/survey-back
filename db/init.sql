-- Active: 1697843913641@@127.0.0.1@5432@survey
SELECT 'CREATE DATABASE survey'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'survey')\gexec