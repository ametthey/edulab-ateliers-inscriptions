import { relations } from "drizzle-orm/relations";
import { ateliers, inscriptions } from "./schema";

export const inscriptionsRelations = relations(inscriptions, ({one}) => ({
	atelier: one(ateliers, {
		fields: [inscriptions.atelierId],
		references: [ateliers.id]
	}),
}));

export const ateliersRelations = relations(ateliers, ({many}) => ({
	inscriptions: many(inscriptions),
}));