
import React from 'react';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LAB_SERVICE_PROFILES, type LabServiceProfile, AAROGYAM_PROFILE_DEFINITIONS, AAROGYAM_PACKAGE_COLUMNS } from '@/lib/constants';
import { ListChecks, IndianRupee } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

function ServiceProfileCard({ profile, index }: { profile: LabServiceProfile, index: number }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in h-full flex flex-col" style={{animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'backwards'}}>
      {profile.image && (
        <div className="relative h-48 w-full">
          <Image
            src={profile.image}
            alt={profile.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={profile.dataAiHint}
          />
        </div>
      )}
      <CardHeader className="flex flex-row items-center gap-3 pt-4">
        <div className="bg-primary/10 p-2 rounded-full">
          <profile.icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-headline text-primary">{profile.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <CardDescription className="text-sm text-muted-foreground mb-1">Includes:</CardDescription>
          <ul className="list-disc list-inside space-y-1 text-foreground text-sm mb-4">
            {profile.testsIncluded.map((test, idx) => (
              <li key={idx}>{test}</li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pt-2 border-t border-border/50">
          <p className="text-lg font-semibold text-primary flex items-center">
            <IndianRupee className="h-5 w-5 mr-1" /> {profile.rate}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Diagnostic Profiles"
        description="Explore our range of diagnostic profiles and tests tailored to your health needs. Each profile is designed to provide comprehensive insights."
        icon={ListChecks}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {LAB_SERVICE_PROFILES.map((profile, index) => (
          <ServiceProfileCard key={profile.id} profile={profile} index={index}/>
        ))}
      </div>

      <div className="mt-16 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'backwards'}}>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-primary mb-8">
          Our Health Packages (Aarogyam)
        </h2>
        <Card className="shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-primary/5">
                    <TableHead className="w-[60%] lg:w-[50%] text-primary font-semibold px-4 py-3">Parameters</TableHead>
                    <TableHead className="w-[40%] lg:w-[50%] text-primary font-semibold px-4 py-3">Included In Packages</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {AAROGYAM_PROFILE_DEFINITIONS.map((param, paramIdx) => {
                    // Handle profile groups with sub-items that need rowSpan
                    if (param.isProfileGroup && param.subItemsList && param.subItemsList.length > 0 && param.name !== "Diabetes Profile (3)") {
                      const packagesForGroup = AAROGYAM_PACKAGE_COLUMNS
                        .filter(col => param.inclusions[col.key])
                        .map(col => col.name);
                      
                      const rowSpan = 1 + (param.subItemsList?.length || 0);

                      return (
                        <React.Fragment key={`${param.name}-${paramIdx}-fragment`}>
                          <TableRow className="bg-muted/10 hover:bg-muted/20 border-b border-border/50 group">
                            <TableCell className="px-4 py-2.5 text-sm font-semibold text-foreground align-top">
                              {param.name}
                            </TableCell>
                            <TableCell 
                              className="px-4 py-2.5 text-sm text-foreground align-top"
                              rowSpan={rowSpan}
                            >
                              {packagesForGroup.length > 0 ? (
                                packagesForGroup.map(pkgName => (
                                  <p key={pkgName} className="mb-1 last:mb-0">{pkgName}</p>
                                ))
                              ) : (
                                '-'
                              )}
                            </TableCell>
                          </TableRow>
                          {param.subItemsList.map(subItemName => (
                            <TableRow key={`${param.name}-${subItemName}-subrow`} className="hover:bg-muted/5 border-b border-border/30 group">
                              <TableCell className="pl-8 text-xs text-muted-foreground px-4 py-2 align-top">
                                {subItemName}
                              </TableCell>
                              {/* No second cell here due to rowSpan from parent */}
                            </TableRow>
                          ))}
                        </React.Fragment>
                      );
                    } 
                    // Handle standalone tests, profile groups without distinct listed sub-items (e.g. Complete Hemogram),
                    // or specific items like HbA1c, Fasting Sugar which are not part of the rowSpanned group logic above.
                    else if (!param.isSubItem || (param.name === "HbA1c" || param.name === "Fasting Sugar")) { 
                      const packagesForParam = AAROGYAM_PACKAGE_COLUMNS
                        .filter(col => param.inclusions[col.key])
                        .map(col => col.name);

                      return (
                        <TableRow 
                          key={`${param.name}-${paramIdx}-mainrow`} 
                          className={`${(param.isProfileGroup && !param.isSubItem && (!param.subItemsList || param.subItemsList.length === 0)) ? 'bg-muted/10 hover:bg-muted/20' : 'hover:bg-muted/10'} border-b border-border/50 group`}
                        >
                          <TableCell 
                            className={`
                              px-4 py-2.5 text-sm align-top
                              ${(param.isProfileGroup && !param.isSubItem && (!param.subItemsList || param.subItemsList.length === 0) && param.name !== "Diabetes Profile (3)") ? 'font-semibold text-foreground' : 'text-foreground'}
                              ${param.name === "Diabetes Profile (3)" ? 'font-semibold text-foreground' : ''}
                              ${param.isSubItem ? 'pl-8' : ''}
                            `}
                          >
                            {param.name}
                          </TableCell>
                          <TableCell className="px-4 py-2.5 text-sm text-foreground align-top">
                            {packagesForParam.length > 0 ? (
                              packagesForParam.map(pkgName => (
                                <p key={pkgName} className="mb-1 last:mb-0">{pkgName}</p>
                              ))
                            ) : (
                              // Avoid showing '-' for "Diabetes Profile (3)" itself as it's a grouping title
                              param.name === "Diabetes Profile (3)" ? null : '-'
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    }
                    // Sub-items that were already rendered under a rowSpanned group are skipped by this point.
                    return null; 
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    