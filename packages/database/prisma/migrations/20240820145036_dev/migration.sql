-- CreateTable
CREATE TABLE "algorithm_session" (
    "id" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL,
    "password" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "quiz" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "algorithm_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "algorithm_session_participant" (
    "id" SERIAL NOT NULL,
    "sessionId" VARCHAR(255) NOT NULL,
    "userId" VARCHAR(255) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "code" TEXT NOT NULL,
    "answerDeclared" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "algorithm_session_participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "algorithm_chat" (
    "id" SERIAL NOT NULL,
    "sessionId" VARCHAR(255) NOT NULL,
    "participantId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "algorithm_chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo_list_todo" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "userId" VARCHAR(255) NOT NULL,
    "dueAt" TIMESTAMP(0) NOT NULL,
    "completedAt" TIMESTAMP(0) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "todo_list_todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "www_post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "www_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "emailVerified" TIMESTAMP(0),
    "image" TEXT,
    "color" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_token" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(0) NOT NULL
);

-- CreateIndex
CREATE INDEX "algorithm_session_participant_sessionId_idx" ON "algorithm_session_participant"("sessionId");

-- CreateIndex
CREATE INDEX "algorithm_session_participant_userId_idx" ON "algorithm_session_participant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "algorithm_session_participant_sessionId_userId_key" ON "algorithm_session_participant"("sessionId", "userId");

-- CreateIndex
CREATE INDEX "algorithm_chat_participantId_idx" ON "algorithm_chat"("participantId");

-- CreateIndex
CREATE INDEX "algorithm_chat_sessionId_idx" ON "algorithm_chat"("sessionId");

-- CreateIndex
CREATE INDEX "todo_list_todo_userId_idx" ON "todo_list_todo"("userId");

-- CreateIndex
CREATE INDEX "account_userId_idx" ON "account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "account_provider_providerAccountId_key" ON "account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "session_sessionToken_key" ON "session"("sessionToken");

-- CreateIndex
CREATE INDEX "session_userId_idx" ON "session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_token_key" ON "verification_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_identifier_token_key" ON "verification_token"("identifier", "token");
