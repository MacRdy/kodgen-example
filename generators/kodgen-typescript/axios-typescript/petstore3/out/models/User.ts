
export interface User {
	readonly id?: number;
	readonly username?: string;
	readonly firstName?: string;
	readonly lastName?: string;
	readonly email?: string;
	readonly password?: string;
	readonly phone?: string;
	/** @description User Status */
	readonly userStatus?: number;
}
