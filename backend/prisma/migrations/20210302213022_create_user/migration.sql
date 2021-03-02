-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario.email_unique" ON "usuario"("email");
