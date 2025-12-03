import React from 'react';
import { Phone, MessageCircle, FileText, MapPin, Menu, X, CheckCircle, Home, Building2, TrendingUp, Users } from 'lucide-react';

export const PhoneIcon = ({ className }: { className?: string }) => <Phone className={className} />;
export const WhatsAppIcon = ({ className }: { className?: string }) => <MessageCircle className={className} />;
export const DocIcon = ({ className }: { className?: string }) => <FileText className={className} />;
export const LocationIcon = ({ className }: { className?: string }) => <MapPin className={className} />;
export const MenuIcon = ({ className }: { className?: string }) => <Menu className={className} />;
export const CloseIcon = ({ className }: { className?: string }) => <X className={className} />;
export const CheckIcon = ({ className }: { className?: string }) => <CheckCircle className={className} />;
export const HomeIcon = ({ className }: { className?: string }) => <Home className={className} />;
export const BuildingIcon = ({ className }: { className?: string }) => <Building2 className={className} />;
export const ChartIcon = ({ className }: { className?: string }) => <TrendingUp className={className} />;
export const UsersIcon = ({ className }: { className?: string }) => <Users className={className} />;
