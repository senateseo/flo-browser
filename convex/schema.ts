import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    userId: v.string(),
    isArchived: v.boolean(),
    parentDocument: v.optional(v.id("documents")),
    content: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    icon: v.optional(v.string()),
    owner: v.optional(v.any()),
    isPublished: v.boolean(),
  })
    .index("by_user", ["userId"])
    .index("by_user_parent", ["userId", "parentDocument"])
    .searchIndex("search_title", {
      searchField: "title",
    }),

  users: defineTable({
    clerkId: v.string(),
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
  }).index("by_clerkId", ["clerkId"]),
});
