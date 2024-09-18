import {Elysia, t} from "elysia";

export const CreateProjectDto = t.Object({
  title: t.String(),
  slug: t.String(),
  description: t.String(),
  credits: t.Array(
    t.Object({
      name: t.String(),
      github: t.String(),
    })
  ),
  url: t.String(),
  status: t.String(),
  assets: t.Array(t.String()),
})

export const UpdateProjectDto = t.Object({
  title: t.String(),
  slug: t.String(),
  description: t.String(),
  credits: t.Array(
    t.Object({
      name: t.String(),
      github: t.String(),
    })
  ),
  url: t.String(),
  status: t.String(),
  assets: t.Array(t.String()),
})