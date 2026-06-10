// Bridge shim: @mariozechner/pi-ai exported getModels() but oh-my-pi's
// pi-ai does not. getBundledModels from @oh-my-pi/pi-catalog is the
// direct equivalent — same model catalog, same return type.
export { getBundledModels as getModels } from "@oh-my-pi/pi-catalog";
